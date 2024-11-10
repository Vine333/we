import React, {useState} from 'react';
import styled from 'styled-components';

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST', headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({
                    title: title, body: body, userId: 1
                })
            });
            const data = await res.json();
            setResponse(data);
            setTitle('');
            setBody('');
        } catch (err) {
            setError('Error submitting data');
        }
    };

    return (<Container>
        <Form onSubmit={handleSubmit}>
            <Label>Title</Label>
            <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Label>Body</Label>
            <Textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <Button type="submit">Submit</Button>
        </Form>
        {response && (<Response>
            <h3>Response:</h3>
            <p>Title: {response.title}</p>
            <p>Body: {response.body}</p>
            <p>ID: {response.id}</p>
        </Response>)}
        {error && <Error>{error}</Error>}
    </Container>);
};

// Styled Components
const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin: 10px 0 5px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  height: 100px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Response = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Error = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
`;

export default PostForm;
