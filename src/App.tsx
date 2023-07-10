import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/redux-hooks";
import {fetchTrains} from "./redux/features/trainSlice/trainSlice";
import {Table} from "./components";

function App() {
    const dispatch = useAppDispatch();
    const trains = useAppSelector((state) => state.train);
    const trainColumns = [{key: "name", label: "name"}, {key: "description", label: "description"}]

    useEffect(() => {
        dispatch(fetchTrains());
    }, [dispatch]);

    if (trains.isLoading) {
        return <div>Loading...</div>;
    }

    if (trains.error) {
        return <div>Error: {trains.error}</div>;
    }
    return (
        <div>
            <Table tableData={trains.trains} headers={['Название','Описание']}  columns={trainColumns}/>
        </div>
    );
}

export default App;
