async function loadPosts(){
 const data=await fetch('data.json').then(r=>r.json());
 document.getElementById('feed').innerHTML=data.posts.map(
 p=>`<div class="post"><h3>${p.author}</h3><p>${p.content}</p></div>`
 ).join('');
}
