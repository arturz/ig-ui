import TypedEvent from './lib/TypedEvent'
import Person from './types/Person'
import Credentials from './types/Credentials'
import Message from './types/Message'

export const onFollow = new TypedEvent<Person>()
export const onLikePost = new TypedEvent<void>()
export const onLogin = new TypedEvent<Credentials>()
export const onFailedLogin = new TypedEvent<Credentials>()
export const onProcessMessage = new TypedEvent<Message>()