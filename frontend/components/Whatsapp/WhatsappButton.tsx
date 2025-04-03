import { MessageCircle } from "lucide-react"

const WhatsAppButton = () => {
  return (
    <a href="https://wa.me/+5492996302273" target="_blank" rel="noreferrer">
      <button className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 rounded-full h-12 w-12 flex justify-center items-center text-white z-10 shadow-lg transition-all duration-300 hover:scale-110">
        <MessageCircle size={24} />
      </button>
    </a>
  )
}

export default WhatsAppButton

