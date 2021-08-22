
export const initialState: any = {
  loading: false,
  response: null,
  error: null,
};

/**
 * @func Reducer getBasicReducer
 * @param state
 * @param action
 */

export default function getBasicReducer(actions: any) {
  const { add, success, request, failure, clear, deleteItem } = actions;
  return function (state = initialState, action: any) {
    switch (action.type) {
      /* CRUD */
      case add:
        const input: {
          videoId: string;
          lastPlayedTime: number;
          lastPlayed: number;
        } = action.payload;

        return {
          ...state,
          playback: {
            ...(state.playback || {}),
            [input.videoId]: input.lastPlayedTime,
          },
          lastPlayed: {
            ...(state.lastPlayed || {}),
            [input.videoId]: input.lastPlayed,
          },
        };

      case request:
        return {
          ...state,
          loading: true,
          error: null,
        };

      case success:
        return {
          ...state,
          loading: false,
          response:  [...(state.response || []), action.payload],
          error: null,
        };
      case deleteItem:
        const { videoId } = action.payload;
        
        return {
          ...state,
          loading: false,
          response: [
            ...state.response.filter((element:any )=> element.videoId !== videoId),
           
          ],
          error: null,
        };
      case failure:
        return {
          ...state,
          loading: false,
          response: null,
          error: action.payload,
        };
      case clear:
        return {
          ...initialState,
        };
      default:
        return state;
    }
  };
}
