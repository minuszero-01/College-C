import React, { useCallback, useState, useEffect } from "react";

export default function EventCard({ eventName, clubName, coordinator }) {
  return (
    <button className="flex flex-row border-2 rounded-xl   mt-4 border-gray-400   hover:bg-lime-300 w-full justify-around items-center h-14">
      <div className="text-base  w-40">{eventName ? eventName : null}</div>

      <div
        className="text-base  border-black w-48  "
        style={{ marginRight: "" }}
      >
        {clubName ? clubName : null}
      </div>

      <div className="text-base  border-black w-32">
        {coordinator ? coordinator : null}
      </div>
    </button>
  );
}
