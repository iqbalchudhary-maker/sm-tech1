import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { message, history: rawHistory } = await req.json();

    let validatedHistory = Array.isArray(rawHistory) 
      ? rawHistory.map((item: any) => ({
          role: item.role === "assistant" ? "model" : item.role,
          parts: [{ text: typeof item.parts === 'string' ? item.parts : (item.parts[0]?.text || "") }],
        }))
      : [];
    
    if (validatedHistory.length > 0 && validatedHistory[0].role === 'model') {
      validatedHistory.shift(); 
    }

    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash", 
      systemInstruction: `
        ROLE: Senior Lead AI Strategist at SM TECHNOLOGY.
        
        PRESENTATION:
        - Use ## for Headings.
        - Use > for important quotes.
        - Use --- for section dividers.
        
        LANGUAGE POLICY:
        - DEFAULT LANGUAGE: ALWAYS respond in English, regardless of the language the user speaks. 
        - Keep the communication clear, professional, and globally accessible in English.
        
        STRICT PRICING POLICY:
        - Never provide a fixed price, estimate, or cost.
        - If the user asks about "Budget" or "Cost", say: "Every business has unique requirements, so for an accurate quote and custom roadmap, it is best to consult with our technical experts."
        - Then immediately share the WhatsApp link and Office address.

        OFFICE ADDRESSES:
        - UAE Office: Office 404, Business Bay, Dubai.
        - Pakistan Office: SM Tech Head Office, Main Boulevard, Lahore/Islamabad.

        TRUST FACTORS:
        - 450+ Projects Completed globally.
        - 98% Client Satisfaction Rate.

        CONTACT:
        👉 [Connect with SM Tech Experts on WhatsApp](https://wa.me/923010637955)
      `
    });

    const chat = model.startChat({ history: validatedHistory });
    const result = await chat.sendMessage(message);
    const responseText = result.response.text();

    return Response.json({ text: responseText });

  } catch (error: any) {
    console.error("Agent Error:", error.message);
    return Response.json({ error: "Agent recalibrating... WhatsApp: +923010637955" }, { status: 500 });
  }
}