import React, { Component } from 'react';
import Image from './Image';

class List extends Component {
    render() {
        return (
        <div>
            <ol>
                <li>Satu<br/><Image linkGambar='https://images.unsplash.com/photo-1504674900247-0877df9cc836' /></li>
                <li>Dua<br/><Image linkGambar='https://images.unsplash.com/photo-1493770348161-369560ae357d' /></li>
                <li>Tiga<br/><Image linkGambar='https://images.unsplash.com/photo-1504754524776-8f4f37790ca0' /></li>
                <li>Empat<br/><Image linkGambar='https://images.unsplash.com/photo-1476224203421-9ac39bcb3327' /></li>
            </ol>
        </div>
        );
    }
}
export default List;