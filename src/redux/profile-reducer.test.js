import profileReducer, {deletePost, postActionCreator} from "./profile-reducer";




let state = {
    posts: [
        {id: 1, post: 'hi', likesCount: 21},
        {id: 2, post: 'how are you', likesCount: 5},
        {id: 3, post: 'yo', likesCount: 1},
        {id: 4, post: 'yes', likesCount: 7},
    ]
}


test('length of Post should be incremented', () => {
    //1. start data
    let action = postActionCreator('You will find the job in IT')
    //2. add data
    let newState = profileReducer(state,action)
    //3. expectation
   expect(newState.posts.length).toBe(5);
});

test('message of post should be correct', () => {
    //1. start data
    let action = postActionCreator('You will find the job in IT')
    //2. add data
    let newState = profileReducer(state,action)
    //3. expectation
   expect(newState.posts[4].post).toBe('You will find the job in IT');
});

test('length after deleting should be decrement', () => {
    //1. start data
    let action = deletePost(1)
    //2. add data
    let newState = profileReducer(state,action)
    //3. expectation
    expect(newState.posts.length).toBe(3);
});

test(`length after deleting shouldn't be decrement if id is incorrect`, () => {
    //1. start data
    let action = deletePost(1000)
    //2. add data
    let newState = profileReducer(state,action)
    //3. expectation
    expect(newState.posts.length).toBe(4);
});


