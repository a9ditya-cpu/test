function LoveMessage() {
  const messages = [
    {
      title: "Kuchupuchu 😚😚",
      content: "Zyada acha toh nhi bana paya, but we will continue to update this webpage",
    },
    {
      title: "My worldddd🌍💞",
      content: "Your eyes steal my words away, isliye your fault, mujhe kuch smjh nhi aa rha kya likhu😒",
    },
    {
      title: "Poet me-",
      content: "If I had a candy bar for every time I thought of you, I would be fat, but still i am not.😭 — Aditya",
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
