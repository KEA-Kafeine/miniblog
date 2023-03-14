import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import axios from "axios";
// import fs from "fs";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function PostWritePage(props) {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async () => {
        await axios.post("http://localhost:3001/posts", { title, content, comments:[] });
        setTitle("");
        setContent("");
    }


return (
        <Wrapper>
            <Container>
            <TextInput height={20}  value={title}  
             onChange={(event) => {
                        setTitle(event.target.value);  }}  />
            <TextInput height={480}  value={content}  
             onChange={(event) => {
                        setContent(event.target.value);  }}  />
            <Button title="글 작성하기" onClick={() => {
                handleSubmit();
                navigate("/");  }} />
            </Container>
        </Wrapper>
    ); } 
    export default PostWritePage;