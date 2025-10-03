"use client";
import { InlineWidget } from "react-calendly";

function MeetingCalender() {
  return (
    <InlineWidget
      url="https://calendly.com/gazdarshariq0/30min"
      className="border"
      styles={{
        height: "650px",
        minWidth: "320px",
      }}
    />
  );
}

export default MeetingCalender;
