'use client'
import WhatsAppIcon from "@/components/icons/whatsapp";
import { useState } from "react";
import LineIcon from "@/components/icons/line";
import FacebookIcon from "@/components/icons/facebook";

interface ContactProp {
  message?: string
}

export default function ContactIndex({ message }: ContactProp) {
  const [loading, setLoading] = useState<{ [key: string]: boolean }>({
    whatsapp: false,
    line: false,
    facebook: false,
  });

  const handleClick = async (platform: string, url: string) => {
    setLoading((prevState) => ({ ...prevState, [platform]: true }));

    try {
      await fetch('/api/record-click', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug: message, clickCount: 1 }), // Send slug data and click count (initially 1)
      });
      console.log('Click data recorded successfully!');
    } catch (error) {
      console.error('Error recording click data:', error);
    } finally {
      setLoading((prevState) => ({ ...prevState, [platform]: false }));
    }

    if (typeof window !== 'undefined') {
      window.open(url);
    }
  };

  return (
    <div className="card mt-4 bordered shadow-lg">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Booking</h2>
        <table className="table">
          <tbody>
          <tr>
            <td className={`text-left`}>Adult</td>
            <td className={`text-right`}>2,000 ฿</td>
          </tr>
          <tr>
            <td className={`text-left`}>Child</td>
            <td className={`text-right`}>1,000 ฿</td>
          </tr>
          </tbody>
        </table>
        <h2 className="card-title divider">Contact us</h2>
        <div className="card-actions justify-center">
          <a
            href={`https://wa.me/66952899946?text=${message}`}
            target={"_blank"}
            type="button"
            className="btn btn-success w-full"
            onClick={() => handleClick('whatsapp', `https://wa.me/66952899946?text=${message}`)}
          >
            {loading.whatsapp ? (
              <span>Processing...</span>
            ) : (
              <>
                <WhatsAppIcon /> WhatsApp
              </>
            )}
          </a>
          <a
            href={`http://m.me/61560957383854?text=${message}`}
            target={"_blank"}
            type="button"
            className="btn btn-primary w-full"
            onClick={() => handleClick('facebook', `http://m.me/61560957383854?text=${message}`)}
          >
            {loading.facebook ? (
              <span>Processing...</span>
            ) : (
              <>
                <FacebookIcon /> Facebook
              </>
            )}
          </a>
          <a
            href={`https://line.me/ti/p/@189pvoha`}
            target={"_blank"}
            type="button"
            className="btn btn-accent w-full"
            onClick={() => handleClick('line', `https://line.me/ti/p/@189pvoha`)}
          >
            {loading.line ? (
              <span>Processing...</span>
            ) : (
              <>
                <LineIcon /> Add Line
              </>
            )}
          </a>
        </div>
      </div>
    </div>
  );
}
