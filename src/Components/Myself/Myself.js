import React from 'react';
import Special from '../Special/Special';

const Myself = ({house,ornament}) => {
    return (
        <div>
            <h4>Me</h4>
            <p><small>House={house}</small></p>
            <Special ornament={ornament}></Special>
        </div>
    );
};

export default Myself;
