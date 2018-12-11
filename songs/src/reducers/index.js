import {combineReducers} from 'redux';

const songsReducer = () =>{
    return [
        {title: 'Atrasadinha', duration: '2:30'},
        {title: 'Vai la', duration: '3:10'},
        {title: 'Parado no bailao', duration: '2:40'},
        {title: 'Ciumeira', duration: '3:30'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type==="SONG_SELECTOR"){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});