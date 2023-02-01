console.log('Hello! ');
fetch('https://gitkrishnaa.github.io/letme_0.1/data.json')
  .then((response) => response.json())
  .then((json) => console.log(json));
