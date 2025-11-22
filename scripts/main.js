document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;

  document.querySelectorAll(".bg").forEach(layer => {
    const speed = layer.dataset.speed;
    layer.style.transform = `translate(${x * speed * 30}px, ${y * speed * 30}px)`;
  });
});