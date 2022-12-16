import React from 'react';

const Rank = ({name, entries}) =>
{
    return(
        <div>
            <div className="tc f3 b">
                <p>{`Hi ${name}, your current entry count is...`}</p>
            </div>
            <div className="tc f1 b">
                <p>{`${entries}`}</p>
            </div>
        </div>
    );
}

export default Rank;