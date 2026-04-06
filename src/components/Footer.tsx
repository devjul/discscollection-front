export default function Footer() {
  const year = new Date().getFullYear()
  
  return (
    <header>
      <h6>
        Copyright {year}
      </h6>
    </header>
  )
}
