import React from 'react'
import {create} from "react-test-renderer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileStatus from "./ProfileStatus";


describe("ProfileStatus component",()=>{
    test("status from props should be in state ",()=>{
        const component = create (<ProfileStatus status={"hey hey"}/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe("hey hey")
    })
    test("After creation input should not be displayed with correct status ",()=>{
        const component = create (<ProfileStatus status={"hey hey"}/>)
        const root = component.root
        expect(()=>{
            let span = root.findByType('input')
        }).toThrow()

    })
    test("After creation span should be displayed with correct status ",()=>{
        const component = create (<ProfileStatus status={"hey hey"}/>)
        const root = component.root
        let span = root.findByType('span')
        expect(span).not.toBeNull()
    })
    test("After creation span should be displayed with correct status ",()=>{
        const component = create (<ProfileStatus status={"hey hey"}/>)
        const root = component.root
        let span = root.findByType('span')
        expect(span.children[0]).toBe("hey hey")
    })
    test("input should be displayed in aditMode instate of span  ",()=>{
        const component = create (<ProfileStatus status={"hey hey"}/>)
        const root = component.root
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe("hey hey")
    })
    test("call back should be called ",()=>{
        const mockCallBack = jest.fn();
        const component = create (<ProfileStatus status={"hey hey"} updateUserStatus={mockCallBack} getUserStatus={()=>{}}/>)
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallBack.mock.calls.length).toBe(1)
    })
})