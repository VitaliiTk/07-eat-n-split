import style from './circlePicture.module.css'

export default function CirclePicture({ imageSRC }) {
  return (
    <div className={style.imageBox}>
      <img className={style.image} src={imageSRC} alt="" />
    </div>
  )
}
