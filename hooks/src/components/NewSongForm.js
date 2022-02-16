import React, {useState} from "react";

const NewSongForm = ({addSong}) => {
    const[title, setTitle] = useState("");

    //   const addSong = () => {
    //     // props.setSong([...props.songs, { title: title, id: props.length + 1 }]);
    //     props.setSong([...props.songs, { title, id: props.length + 1 }]);
    //   };

    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(title);
        setTitle("");
    };

    return ( 
        <form style={{marginTop: 20}} onSubmit={handleSubmit}>
            <lable style={{marginRight: 5}}>
                Song name:
            </lable>
            <input type="text" onChange={(e) => setTitle(e.target.value)}/>
            <input style={{marginLeft: 10}} type="submit" value="Add"/>
        </form>
    );
    
};
export default NewSongForm;