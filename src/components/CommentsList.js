import React, { useState } from 'react';

const CommentsList = () => {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" },
    ]);

    const handleDelete = (id) => {
        // Удаляем комментарий с указанным id
        setComments(comments.filter(comment => comment.id !== id));
    };

    return (
        <div>
            <h1>Список комментариев</h1>
            {comments.length > 0 ? (
                <ul>
                    {comments.map(comment => (
                        <li key={comment.id} style={{ marginBottom: '10px' }}>
                            <span>{comment.text}</span>
                            <button
                                onClick={() => handleDelete(comment.id)}
                                style={{
                                    marginLeft: '10px',
                                    backgroundColor: '#f44',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '5px',
                                    padding: '5px',
                                    cursor: 'pointer',
                                }}
                            >
                                Удалить
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Комментариев нет</p>
            )}
        </div>
    );
};

export default CommentsList;
