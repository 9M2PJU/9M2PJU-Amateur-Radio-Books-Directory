const express = require('express');
const cors = require('cors');
const fs = require('fs-extra');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'data', 'stats.json');

app.use(cors());
app.use(express.json());

// In-memory stats storage
// Structure: { "filename.pdf": { views: 0, downloads: 0 } }
let stats = {};
let isDirty = false;

// Load stats on startup
async function loadStats() {
    try {
        await fs.ensureDir(path.dirname(DATA_FILE));
        if (await fs.pathExists(DATA_FILE)) {
            stats = await fs.readJson(DATA_FILE);
            console.log('Stats loaded successfully.');
        } else {
            console.log('No stats file found, starting fresh.');
        }
    } catch (err) {
        console.error('Error loading stats:', err);
    }
}

// Save stats periodically
async function saveStats() {
    if (!isDirty) return;
    try {
        await fs.writeJson(DATA_FILE, stats);
        isDirty = false;
        console.log('Stats saved to disk.');
    } catch (err) {
        console.error('Error saving stats:', err);
    }
}

// Save every 10 seconds if changed
setInterval(saveStats, 10000);

// Graceful shutdown
process.on('SIGTERM', async () => {
    console.log('SIGTERM received. Saving stats...');
    await saveStats();
    process.exit(0);
});

// API Endpoints

// Get all stats
app.get('/stats', (req, res) => {
    res.json(stats);
});

// Track an action
app.post('/track', (req, res) => {
    const { file, type } = req.body; // type: 'view' | 'download'

    if (!file || !type) {
        return res.status(400).json({ error: 'Missing file or type' });
    }

    if (!stats[file]) {
        stats[file] = { views: 0, downloads: 0 };
    }

    if (type === 'view') {
        stats[file].views = (stats[file].views || 0) + 1;
    } else if (type === 'download') {
        stats[file].downloads = (stats[file].downloads || 0) + 1;
    }

    isDirty = true;
    res.json(stats[file]);
});

app.listen(PORT, async () => {
    await loadStats();
    console.log(`Stats service running on port ${PORT}`);
});
