import "./Matches.css";
import { useState } from "react";
import { Profile } from "../../util/interfaces/Profile";
import React from "react";
import { MatchesCard } from "../../components/Cards/MatchesCard";
import { ShuffleButton } from "../../components/ShuffleButton/ShuffleButton";
import data from "../../data.json";
interface Props {
  profiles: Profile[];
  userEmail: any;
}

export const Matches: React.FC<Props> = ({ profiles, userEmail }) => {
  // const [selectedPerson, setSelectedPerson] = useState<Profile | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [clicked, setClicked] = useState<boolean>(false);

  const handleShuffle = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
    setClicked(true);
  };

  setTimeout(() => {
    setClicked(false);
  }, 1000);

  return (
    <div className="flex items-center justify-center w-full h-full">
      {profiles.length ? (
        <div className="flex justify-center h-full flex-col items-center">
          {profiles.length && (
            <MatchesCard
              profile={profiles[currentIndex]}
              userEmail={userEmail}
              curUserId={profiles[currentIndex].userId}
            />
          )}
          {/* {console.log(profiles[currentIndex].email)} */}
          <div className="flex justfy-center p-3">
            {/* {data.map((profile: Profile, index: number) => (
            <div
              key={index}
              className={`card ${currentIndex === index ? "top-card" : ""}`}
            >
              <span>{profile.name}</span>
            </div>
          ))} */}
            <button
              className={`shuffle-button absolute top-0 right-0 mt-2 mr-2 ${
                clicked ? "clicked" : ""
              }`}
              onClick={() => {
                handleShuffle();
              }}
            >
              <ShuffleButton />
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 justify-items-center w-1/2">
          <div className="font-playfair-display text-2xl">
            😭 No Matches Found 🥵
          </div>
          <div className="font-playfair-display text-large text-pretty">
            We pay over 100 retired fishermen a LOT of mackerel to match
            profiles together. Unfortumately, they weren't able to find anyone
            who meets your preferences. Try relaxing your requirements, and
            they'll give it another go.
          </div>
        </div>
      )}
    </div>
  );
};
