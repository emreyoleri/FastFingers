import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const initialState = {
    challenges: [
      {
        id: Math.random(),
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem quas at nulla non ipsa, eveniet quisquam quibusdam fugit autem rem. Officiis, debitis! Distinctio odit enim eaque unde neque fugit!",
      },
    ],
    currentChallange: {
      id: Math.random(),
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi exercitationem quas at nulla non ipsa, eveniet quisquam quibusdam fugit autem rem. Officiis, debitis! Distinctio odit enim eaque unde neque fugit!",
    },
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    let localStorageCheck = JSON.parse(localStorage.getItem("challenges"));
    if (!localStorageCheck) {
      localStorage.setItem("challenges", JSON.stringify([]));
    } else {
      setState({
        ...state,
        challenges: localStorageCheck,
      });
    }
  }, []);

  const deleteText = (id) => {
    let newChallenges = state.challenges.filter(
      (challenge) => challenge.id !== id
    );
    setState({
      ...state,
      challenges: newChallenges,
    });

    localStorage.setItem("challenges", JSON.stringify(newChallenges));
  };

  const chooseText = (id) => {
    let findText = state.challenges.find((challenge) => challenge.id === id);
    setState({
      ...state,
      currentChallange: findText,
    });
  };

  const addText = (text) => {
    if (text !== " ") {
      var newChallenge = {
        id: Math.random(),
        text,
      };
      let localStorageCheck = JSON.parse(localStorage.getItem("challenges"));
      localStorage.setItem(
        "challenges",
        JSON.stringify([...localStorageCheck, newChallenge])
      );
    }

    setState({
      ...state,
      challenges: [...state.challenges, newChallenge],
    });
  };

 

  return (
    <Context.Provider value={{ state, addText, deleteText, chooseText }}>
      {children}
    </Context.Provider>
  );
};
export default ContextProvider;
