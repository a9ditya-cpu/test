function LoveMessage() {
  const messages = [
    {
      title: "Meri jaan Sakshi ke naam",
      content: "Har roz tumhare saath ek nai kahani jaisi lagti hai, tumhari muskaan se hi mera din shuru aur khatam hota hai.",
    },
    {
      title: "Tum hi meri saari duniya ho",
      content: "Tum mein mujhe mera sabse pyaara dost, mera sahaara aur meri sabse badi mohabbat teeno mil gaye.",
    },
    {
      title: "Har pal tumhara shukraguzaar hoon",
      content: "Tumhare saath bitaya har chhota sa pal bhi mere liye khazana hai, jise main hamesha dil mein saja kar rakhunga.",
    },
  ]

  return (
    <div className="space-y-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className="ios-card p-5 animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <h3 className="text-lg font-semibold text-black mb-2">
            {message.title}
          </h3>
          <p className="text-base text-ios-gray leading-relaxed">
            {message.content}
          </p>
        </div>
      ))}
    </div>
  )
}

export default LoveMessage
