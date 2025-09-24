
FROM nginx:alpine

# Copiar tu configuración de Nginx personalizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar tus archivos estáticos (HTML, CSS, JS, imágenes, etc.)
COPY . /usr/share/nginx/html

# Exponer puerto 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
