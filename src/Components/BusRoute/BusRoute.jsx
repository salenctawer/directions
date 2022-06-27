import React from "react"
import styles from './BusRoute.module.scss'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router-dom";
import { Link } from "@mui/material";


const BusRoute = (props) =>{

    let redirect = useNavigate()


    return (<div className={styles.busRoute}>
        <div >
        <Link href="#" underline="none" onClick={()=>redirect('/')}>
            {'На начальную страницу'}
        </Link>
            Направление {props.item.checks[15]} - {props.item.checks[1]}
            {props.item.timeFirstDirection?.map(item=>
                    <div>
                        <FormControl sx={{ m: 1, minWidth: 300 }}>
                        <InputLabel htmlFor="grouped-native-select">{item.name}</InputLabel>
                            <Select defaultValue="" id="grouped-select" label="Grouping">
                                <MenuItem value="">
                                    <em>{item.name}</em>
                                </MenuItem>
                                    <ListSubheader>{'5 часов'}</ListSubheader>
                                    {props.item.timeFirstDirection[0][5].split(',').map(time =>
                                        <MenuItem value={time}>{`${time} минуты`}</MenuItem>
                                    )}
                                    <ListSubheader>{'6 часов'}</ListSubheader>
                                    {props.item.timeFirstDirection[0][6].split(',').map(time =>
                                        <MenuItem value={time}>{`${time} минуты`}</MenuItem>
                                    )}
                                    <ListSubheader>{'7 часов'}</ListSubheader>
                                    {props.item.timeFirstDirection[0][7].split(',').map(time =>
                                        <MenuItem value={time}>{`${time} минуты`}</MenuItem>
                                    )}
                                    <ListSubheader>{'8 часов'}</ListSubheader>
                                    {props.item.timeFirstDirection[0][8].split(',').map(time =>
                                        <MenuItem value={time}>{`${time} минуты`}</MenuItem>
                                    )}
                                    <ListSubheader>{'9 часов'}</ListSubheader>
                                    {props.item.timeFirstDirection[0][9].split(',').map(time =>
                                        <MenuItem value={time}>{`${time} минуты`}</MenuItem>
                                    )}
                                    <ListSubheader>{'10 часов'}</ListSubheader>
                                    {props.item.timeFirstDirection[0][10].split(',').map(time =>
                                        <MenuItem value={time}>{`${time} минуты`}</MenuItem>
                                    )}
                                    <ListSubheader>{'11 часов'}</ListSubheader>
                                    {props.item.timeFirstDirection[0][11].split(',').map(time =>
                                        <MenuItem value={time}>{`${time} минуты`}</MenuItem>
                                    )}
                                    <ListSubheader>{'12 часов'}</ListSubheader>
                                    {props.item.timeFirstDirection[0][12].split(',').map(time =>
                                        <MenuItem value={time}>{`${time} минуты`}</MenuItem>
                                    )}
                                    <ListSubheader>{'13 часов'}</ListSubheader>
                                    {props.item.timeFirstDirection[0][13].split(',').map(time =>
                                        <MenuItem value={time}>{`${time} минуты`}</MenuItem>
                                    )}
                                    <ListSubheader>{'14 часов'}</ListSubheader>
                                    {props.item.timeFirstDirection[0][14].split(',').map(time =>
                                        <MenuItem value={time}>{`${time} минуты`}</MenuItem>
                                    )}
                            </Select>
                            </FormControl>
                    </div>
                )}
        </div>
        <div>
            Направление {props.item.checks[1]} - {props.item.checks[15]}
            {props.item.timeSecondDirection?.map(item=>
                    <div>
                        <FormControl sx={{ m: 1, minWidth: 300 }}>
                        <InputLabel htmlFor="grouped-native-select">{item.name}</InputLabel>
                            <Select defaultValue="" id="grouped-select" label="Grouping">
                                <MenuItem value="">
                                    <em>{item.name}</em>
                                </MenuItem>
                                    <ListSubheader>{'5 часов'}</ListSubheader>
                                    {props.item.timeFirstDirection[0][5].split(',').map(time =>
                                        <MenuItem value={time}>{`${time} минуты`}</MenuItem>
                                    )}
                                    <ListSubheader>{'6 часов'}</ListSubheader>
                                    {props.item.timeFirstDirection[0][6].split(',').map(time =>
                                        <MenuItem value={time}>{`${time} минуты`}</MenuItem>
                                    )}
                                    <ListSubheader>{'7 часов'}</ListSubheader>
                                    {props.item.timeFirstDirection[0][7].split(',').map(time =>
                                        <MenuItem value={time}>{`${time} минуты`}</MenuItem>
                                    )}
                                    <ListSubheader>{'8 часов'}</ListSubheader>
                                    {props.item.timeFirstDirection[0][8].split(',').map(time =>
                                        <MenuItem value={time}>{`${time} минуты`}</MenuItem>
                                    )}
                                    <ListSubheader>{'9 часов'}</ListSubheader>
                                    {props.item.timeFirstDirection[0][9].split(',').map(time =>
                                        <MenuItem value={time}>{`${time} минуты`}</MenuItem>
                                    )}
                                    <ListSubheader>{'10 часов'}</ListSubheader>
                                    {props.item.timeFirstDirection[0][10].split(',').map(time =>
                                        <MenuItem value={time}>{`${time} минуты`}</MenuItem>
                                    )}
                                    <ListSubheader>{'11 часов'}</ListSubheader>
                                    {props.item.timeFirstDirection[0][11].split(',').map(time =>
                                        <MenuItem value={time}>{`${time} минуты`}</MenuItem>
                                    )}
                                    <ListSubheader>{'12 часов'}</ListSubheader>
                                    {props.item.timeFirstDirection[0][12].split(',').map(time =>
                                        <MenuItem value={time}>{`${time} минуты`}</MenuItem>
                                    )}
                                    <ListSubheader>{'13 часов'}</ListSubheader>
                                    {props.item.timeFirstDirection[0][13].split(',').map(time =>
                                        <MenuItem value={time}>{`${time} минуты`}</MenuItem>
                                    )}
                                    <ListSubheader>{'14 часов'}</ListSubheader>
                                    {props.item.timeFirstDirection[0][14].split(',').map(time =>
                                        <MenuItem value={time}>{`${time} минуты`}</MenuItem>
                                    )}
                            </Select>
                            </FormControl>
                    </div>
                )}
        </div>
    </div>)
}

export default BusRoute