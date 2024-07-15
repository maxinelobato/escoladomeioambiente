import Image from 'next/image'
import logoEMA from '../../../public/assets/emalogo.png'

export const EmaLogo = () => (
  <Image
    src={logoEMA}
    alt="Logo Ema"
    className="h-auto w-24 sm:w-28"
    sizes="100%"
  />
)
