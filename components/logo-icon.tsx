import Image from "next/image"

export function LogoIcon({ className }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-md ${className}`}>
      <Image
        src="/images/logo.jpg"
        alt="Ajay Translogistics Logo"
        fill
        className="object-contain"
        sizes="(max-width: 768px) 32px, 48px"
      />
    </div>
  )
}
