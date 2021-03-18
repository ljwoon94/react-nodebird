import React, { useCallback, useRef, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addPost , UPLOAD_IMAGES_REQUEST } from '../reducers/post'
import useInput from '../hooks/useInput';
const PostForm = () => {
    const dispatch = useDispatch();
    const { imagePaths, addPostDone } = useSelector((state) => state.post);
    const [text, onChangeText, setText] = useInput('');

    useEffect(() => {
        if (addPostDone) {
            setText('');
        }
    }, [addPostDone]);

    const onSubmit = useCallback(() => {
        dispatch(addPost(text));
    }, [text]);

    const imageInput = useRef();
    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);

    const onChangeImages = useCallback((e)=>{
        console.log('images', e.target.files);
        const imageFormData = new FormData();
        [].forEach.call(e.target.files, (f)=>{
            imageFormData.append('image', f);
        });
        dispatch({
            type: UPLOAD_IMAGES_REQUEST,
            data: imageFormData,
        })
    });

    return (
        <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onFinish={onSubmit}>
            {/* npm i multer 백에 multipart로 파일 보내기위해 필요한 미들웨어 */}
            <Input.TextArea
                value={text}
                onChange={onChangeText}
                maxLength={140}
                placeholder="어떤 신기한 일이 있었나요?"
            />
            <div>
                <input type="file" name="image" multiple hidden ref={imageInput} onChange={onChangeImages}/>
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                <Button type="primary" style={{ float: 'right' }} htmlType="submit">등록</Button>
            </div>
            <div>
                {imagePaths.map((v, i) => (
                    <div key={v} style={{ display: 'inline-block' }}>
                        <img src={`http://localhost:3060/${v}`} style={{ width: '200px' }} alt={v} />
                        <div>
                            <Button>제거</Button>
                        </div>
                    </div>
                ))}
            </div>
        </Form >
    )
};
export default PostForm;