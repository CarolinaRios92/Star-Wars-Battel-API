export const Random = ({random, side}) => {
    return (
        <div class="row">
            <button
                class="ms-auto btn btn-secondary px-5 btn-sm text-bold"
                onClick={() => random(side)}>
                Random
            </button>
        </div>
    )
}