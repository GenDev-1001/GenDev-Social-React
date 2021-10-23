type SidebarDataType = {
    id: number,
    name: string,
    imgUrl: string
}

let initialState = {
    sidebarData: [
        {id: 1, name: 'Alex', imgUrl: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d'},
        {id: 2, name: 'Rim', imgUrl: 'https://media.istockphoto.com/photos/grey-stripped-mixedbreed-cat-sitting-isolated-on-white-picture-id1217828258?b=1&k=6&m=1217828258&s=170667a&w=0&h=aTRNOEvv3DrtII-f0r9rVTS-nAHE4NyYopuu-sZIv8g='},
        {id: 3, name: 'Pop', imgUrl: 'https://thumbs.dreamstime.com/b/cat-third-eye-beige-has-got-white-background-isolated-187489452.jpg'},
    ] as Array<SidebarDataType>
};

export type InitialStateType = typeof initialState

const sidebarReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type){
        default:
            return state
    }
}

export default sidebarReducer;