"use client"

import React, { useEffect } from "react";
import { useState } from "react";

const AnnouncementBanner = ({ message }: any) => {
    const [closed, setClosed] = useState<boolean>(false);

  return (
    <div
      className={`w-full h-[32px] fixed top-0 left-0 right-0 z-[999] bg-indigo-600 flex items-center justify-center gap-x-2 pl-8 pr-2 ${closed && "translate-y-[-100%]"}`}
      role="banner"
    >
      {/* ICON */}
      <div className="w-fit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="rgba(237,244,255,1)"
        >
          <path d="M20 17H22V19H2V17H4V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V17ZM9 21H15V23H9V21Z"></path>
        </svg>
      </div>
      {/* MESSAGE */}
      <div className="w-fit text-[14px]">
        <span title={`${message}`}></span>
        <p>
            {message}
            <style jsx>
          {`
            p {
              text-decoration: underline;
              font-weight: 500;
            }
          `}
        </style>
        </p>
      </div>
      {/* BUTTON */}
      <div className="w-fit ml-auto">
        <button onClick={() => setClosed(true)} aria-label="Close Banner">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(240,245,255,1)"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
            <style jsx>{`
                button {
                    width: 20px;
                    height: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: none;
                    border-radius: 0.15rem;
                    color: #fff;
                }
                button:hover {
                    background-color: rgba(31 62 231, 20);
                }
            `}</style>
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
