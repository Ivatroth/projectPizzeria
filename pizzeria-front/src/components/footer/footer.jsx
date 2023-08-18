import './footer.css'

export default function Footer() {
  return (
    <footer class="seccion-oscura d-flex flex-column align-items-center justify-content-center border-top"> 
    <div class="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
      <a href="https://github.com/Ivatroth" target="_blank" rel="noopener noreferrer">
        <i class="bi bi-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/ivana-frontroth" target="_blank" rel="noopener noreferrer">
        <i class="bi bi-linkedin"></i>
      </a>
      <a href="mailto:ifrontroth@gmail.com" target="_blank" rel="noopener noreferrer">
        <i class="bi bi-envelope"></i>
      </a>
    </div>
    <div class="derechos-de-autor">Creado por I Frontroth (2023) &#169;</div>
  </footer>
  )
}
