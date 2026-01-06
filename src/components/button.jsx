import styled from "styled-components";

const CustomButton = styled.button`
        background: linear-gradient(to bottom, #ff6b5a, #e63946);
        color: white;
        border: none;
        border-radius: 8px;
        padding: 6px 6px;
        font-size: 16px;
        font-weight: 500;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        transition: transform 0.1s ease, box-shadow 0.1s ease;
        min-width: 200px

`;

export default function Button({ content }) {
    return (<CustomButton>{content}</CustomButton>);
}

