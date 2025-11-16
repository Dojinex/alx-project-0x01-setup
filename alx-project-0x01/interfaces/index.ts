// Interface for fetched Post display
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Interface for new Post creation (ID optional)
export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

// Interface for Post modal component props
export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

// User props interface (required for displaying user cards)
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// For creating new users using a modal form
export type UserData = UserProps;

// User modal props
export interface UserModalProps {
  onClose: () => void;
  onSubmit: (user: UserData) => void;
}


