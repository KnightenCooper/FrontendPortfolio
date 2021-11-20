fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data));

  const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

fetch('https://jsonplaceholder.typicode.com/todos/1', {
  method: 'PUT',
  body: formData
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});


const formDataMultiple = new FormData();
const photos = document.querySelector('input[type="file"][multiple]');

formDataMultiple.append('title', 'My Vegas Vacation');
for (let i = 0; i < photos.files.length; i++) {
  formDataMultiple.append(`photos_${i}`, photos.files[i]);
}

fetch('https://jsonplaceholder.typicode.com/todos/1', {
  method: 'POST',
  body: formDataMultiple,
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});