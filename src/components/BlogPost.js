import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { 
    FaChevronLeft, FaChevronRight, FaNewspaper, FaPlus,
    FaStar
 } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";


// Styled components
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
`;

const Cover = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 20vh;
    width: 100%;
`; 

const CoverImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
    width: 90%;
`;

const Author = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AuthorName = styled.a`
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    padding-left: 5px;
`;

const Profile = styled.div`
    border-radius: 50%;
    height: 40px;
    width: 40px; 
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Time = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TimeText = styled.a`
    font-family: "Poppins", sans-serif;
    font-size: 18px;
`;

const Content = styled.div`
    display: flex;
    width: 90%;
`;

const Text = styled.p`
    font-family: "Poppins", sans-serif;
    font-size: 18px;
`;

const Title = styled.h1`
    font-family: "Poppins", sans-serif;
`;

const Left = styled.div`
    display: flex;
    width: 20%;
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    height: 100%;
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
    position: fixed;
    top: 50%;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
`;

const Arrow = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    border: none;
    padding: 18px;
    font-size: 18px;
    opacity: 0.5;
    &:hover {
        opacity: 1;
    }
`;

const Actions = styled.div`
    display: flex;
    width 100%;
    height: 10%;
    align-items: center;
`;

const Button = styled.button`
    border: 1px solid black;
    background-color: white;
    display: flex;
    align-items: center;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    padding: 5px;
    margin-top: 10px;
    margin-left: 10px;
    &:hover {
        background-color: black;
        color: white;
        cursor: pointer;
    }
`;

const Favorite = styled.button`
    border: 1px solid black;
    background-color: ${props => props.isFavorite ? 'yellow' : 'white'};
    color: ${props => props.isFavorite ? 'black' : 'initial'};
    display: flex;
    align-items: center;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    padding: 5px;
    margin-top: 10px;
    margin-left: 10px;
    &:hover {
        background-color: black;
        color: white;
        cursor: pointer;
    }
`;

export const formatTime = (timestamp) => {
    const now = new Date();
    const postDate = new Date(timestamp);
    const diffInMs = now - postDate;
    const diffInMinutes = Math.floor(diffInMs / 60000);
    const diffInHours = Math.floor(diffInMs / 3600000);
    const diffInDays = Math.floor(diffInMs / 86400000);

    if (diffInMinutes < 60) {
        return `${diffInMinutes} minutes ago`;
    } else if (diffInHours < 24) {
        return `${diffInHours} hours ago`;
    } else {
        return postDate.toLocaleDateString();
    }
}


const BlogPost = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    /* Need to make functions to get the current post and functions to
       get the next post 
    */
    const apiUrl = 'https://18.219.147.241';
    const { id } = useParams();
    const [index, setIndex] = useState(id);
    const [posts, setPosts] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);
    useEffect(()=> {
        const getPosts = async () => {
            try {
            const response = await axios.get(`${apiUrl}/api/get/getPost`);
            console.log(response);
            setPosts(response.data);
            } catch (error) {
                console.error(error);
            } 
        }
        getPosts();
    }, []);
    const addPost = () => {
        if (!user) {
            navigate("/login");
        } else {
            navigate("/blog/addpost")
        }
    }

    const allPosts = () => {
        navigate("/blog/allposts")
    }

    const nextPost = () => {
        setIndex(prevIndex => {
            const newIndex = (prevIndex + 1) % posts.length; // Wrap around to 0 if at the end
            navigate(`/blog/${newIndex}`);
            return newIndex;
        });
    }

    const lastPost = () => {
        setIndex(prevIndex => {
            const newIndex = (prevIndex - 1 + posts.length) % posts.length; // Wrap around to last post if at the beginning
            navigate(`/blog/${newIndex}`);
            return newIndex;
        });
    }

    const formatText = (text) => {
        return text.replace(/\r\n/g, '<br/>');
    };

    const addToFavorites = async () => {
        setIsFavorite(prevState => !prevState);
        if (isFavorite && user) {
            try {
                const response = await axios.post(`${apiUrl}/api/post/addFavorite`, {user: user.email, post: posts[index]});
                console.log(response);
            } catch (error) {
                console.error("Couldn't set favorite", error);
            }
        } else if (isFavorite && !user) {
            navigate("/login");
        }
    }
    

    if (posts.length) {
        console.log(posts[index]);
        return (
            <>
            <ButtonContainer>
                    <Buttons>
                        <Arrow onClick={lastPost}>
                            <FaChevronLeft/>
                        </Arrow>
                        <Arrow onClick={nextPost}>
                            <FaChevronRight/>
                        </Arrow>
                    </Buttons>
            </ButtonContainer>
            <Left/>
            <Container>
                <Cover>
                    <CoverImage src={posts[id].photoUrl}/>
                </Cover>
                <Head>
                    <Title>{posts[id].title}</Title>
                </Head>
                <Head>
                    <Author>
                        <Profile>
                            <ProfileImage src={posts[id].profilePicture}/>
                        </Profile>
                        <AuthorName>{posts[id].firstName} {posts[id].lastName}</AuthorName>
                    </Author>
                    <Time>
                        <TimeText>{formatTime(posts[id].createdAt)}</TimeText>
                    </Time>
                </Head>
                <Content>
                    <Text dangerouslySetInnerHTML={{ __html: formatText(posts[id].body)}}/>
                </Content>
            </Container>
            <Right>
                    <Actions>
                        <Button onClick={addPost}>
                            <FaPlus/>
                            &nbsp;
                            Add Post
                        </Button>
                        <Button onClick={allPosts}>
                            <FaNewspaper/>
                            &nbsp;
                            All Posts
                        </Button>
                    </Actions>
                    <Actions>
                        <Favorite isfavorite={isFavorite} onClick={addToFavorites}>
                            <FaStar/>
                            &nbsp;
                            Favorite
                        </Favorite>
                    </Actions>
                </Right>
            </>
        )
    }
}

export default BlogPost;