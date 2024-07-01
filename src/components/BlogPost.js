import styled from "styled-components";

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
    height: 8vh;
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


const BlogPost = () => {
    return (
        <Container>
            <Cover>
                <CoverImage src={require("../images/P1010492.JPG")}/>
            </Cover>
            <Head>
                <Title>Valentine's Day Photo Shoot</Title>
            </Head>
            <Head>
                <Author>
                    <Profile>
                        <ProfileImage src={require("../images/P1010492.JPG")}/>
                    </Profile>
                    <AuthorName>Alicia Keys</AuthorName>
                </Author>
                <Time>
                    <TimeText>6/25/2024</TimeText>
                </Time>
            </Head>
            <Content>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae cursus tortor, in iaculis tortor. Quisque aliquam metus nec nisi ultricies, rhoncus dapibus orci vehicula. Duis auctor commodo lacinia. Proin non risus gravida leo gravida ullamcorper. Mauris semper augue nec nisl tristique ultricies. Aenean molestie luctus feugiat. Donec velit lorem, interdum vitae orci non, dictum finibus dolor. Maecenas imperdiet risus eu egestas tristique. Mauris gravida dui magna, et molestie dui blandit vel. Vestibulum laoreet mi id lectus venenatis porttitor. Nullam finibus imperdiet suscipit. Pellentesque suscipit nec ex eget eleifend. Aliquam vitae libero nec augue consequat hendrerit. Praesent fermentum nunc tortor, ut condimentum ex viverra sed. Mauris nec lobortis velit.

Nullam venenatis nec massa sit amet tempor. <br/><br/>Phasellus ligula neque, luctus nec posuere sit amet, pulvinar sit amet urna. Etiam massa eros, laoreet quis hendrerit a, semper at ipsum. Nam dui justo, auctor at placerat non, malesuada ac libero. Integer est ex, consequat sit amet nisl sed, gravida finibus enim. In blandit rhoncus turpis, non auctor nulla condimentum ac. Quisque eget magna ex.

Nulla facilisi. Curabitur lacinia vel ipsum a sodales. Morbi vel elit molestie arcu hendrerit finibus.<br/><br/> Quisque pulvinar tempus nibh at commodo. Morbi vel dignissim risus. Pellentesque id augue ac nisl tincidunt dapibus id quis arcu. Quisque id purus eget massa convallis blandit. Vivamus mattis varius nibh quis fringilla. Pellentesque hendrerit nisl sed erat egestas aliquet. Morbi vel risus lacus.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas molestie efficitur eros, in varius sapien tincidunt vitae. Nam commodo massa id mi consectetur rhoncus.<br/><br/> Fusce hendrerit pharetra massa quis semper. Etiam feugiat laoreet maximus. Pellentesque aliquam malesuada cursus. Ut sem est, pulvinar nec erat nec, tincidunt finibus nulla. Praesent vehicula tellus eros, ut porta erat condimentum vel. Etiam pharetra odio a sapien egestas, vitae auctor diam finibus. Quisque eget elit feugiat, ullamcorper lacus eu, facilisis nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In in enim sed felis tincidunt blandit. Aliquam nec placerat lectus, quis tincidunt ligula.

Quisque elementum tempor arcu.<br/><br/> Quisque et dui vitae risus vestibulum pharetra a a lacus. Vestibulum commodo eu tellus non faucibus. Fusce maximus fermentum mauris, ac ultrices metus imperdiet et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi facilisis sed sem eget egestas. Duis quis eros ornare, finibus nunc sodales, venenatis orci. Proin faucibus rhoncus mi, ac finibus enim volutpat nec. Duis ac quam non leo ultrices tincidunt. Vivamus efficitur et velit id mattis. Donec porta tristique nisl sed iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Content>
        </Container>
    )

}

export default BlogPost;