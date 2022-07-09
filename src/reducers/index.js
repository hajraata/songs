import { combineReducers } from "redux"; // when importing a named export, we put { } around it.

const songsReducer = () => {
  return [
    { title: "A", duration: "1:00" },
    { title: "B", duration: "2:00" },
    { title: "C", duration: "3:00" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
