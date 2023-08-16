export const Random = ({random, side}) => {
    return (
        <div>
            <button
                onClick={() => random(side)}>
                Random
            </button>
        </div>
    )
}