FROM nginx:alpine

# Install the fancyindex module
RUN apk add --no-cache nginx-mod-http-fancyindex git

# Enable the module in the main config
RUN sed -i '1i load_module /usr/lib/nginx/modules/ngx_http_fancyindex_module.so;' /etc/nginx/nginx.conf

# Download the specific theme
RUN git clone https://github.com/Naereen/Nginx-Fancyindex-Theme.git /var/www/theme
# Remove git metadata to save space
RUN rm -rf /var/www/theme/.git
