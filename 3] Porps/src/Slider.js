export default function ImageSlider() {
  return (
    <section id={'containerSlider'}>
      <div id={'Slider'}>
        <img src="https://picsum.photos/1920/1080?tech" alt="تكنولوجيا" loading="lazy"/>
        <img src="https://picsum.photos/1920/1080?design" alt="تصميم" loading="lazy"/>
        <img src="https://picsum.photos/1920/1080?innovation" alt="ابتكار" loading="lazy"/>
      </div>
    </section>
  )
}