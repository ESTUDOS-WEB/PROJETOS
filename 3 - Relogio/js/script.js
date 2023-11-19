function atualiza() {
  document.location.reload();
  const data = new Date();
  valorHora[0].innerHTML = data.getHours();
  valorHora[1].innerHTML = data.getMinutes();
  valorHora[2].innerHTML = data.getSeconds();
  console.log("Segundos",data.getSeconds());
}

const valorHora = document.getElementsByClassName("data");

setInterval(atualiza(),1000);

