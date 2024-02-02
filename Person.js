const MAX_NAME_LENGTH = 6;

const Person = ({age, hobbies, name}) => {
    const voteText = age >= 18
    ? "Go vote!"
    : "You must be 18."

    const hobbiesLis = hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div>
            <p>Learn some information about this person.</p>
            <ul>
                <li>Name: {name.slice(0, MAX_NAME_LENGTH)}</li>
                <li>Age: {age}</li>
                <ul>
                    Hobbies: {hobbiesLis}
                </ul>
            </ul>
            <h3>{voteText}</h3>
        </div>
    );
}