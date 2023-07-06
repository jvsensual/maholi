const fileInput = document.getElementById('file-input');
const preview = document.getElementById('preview');

fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const fileURL = URL.createObjectURL(file);

    if (file.type.includes('image')) {
        preview.innerHTML = `<img src="${fileURL}" alt="Preview">`;
    } else if (file.type.includes('video')) {
        preview.innerHTML = `<video controls><source src="${fileURL}" type="${file.type}"></video>`;
    }

    preview.style.display = 'block';
});
