import {GatePolicy, RoleClausePattern} from '../lib/gate-policy';

describe('policy parser', () => {

    it('orOfAnds', () => {
        const policyStr = `OR(AND('A.member', 'B.member'), 'C.member', AND('A.member', 'D.member'))`;
        GatePolicy.FromString(policyStr);
    });
    it('andOfOrs', () => {
        const policyStr = `AND('A.member', 'C.member', OR('B.member', 'D.member'))`;
        GatePolicy.FromString(policyStr);
    });
    it('orOfOrs', () => {
        const policyStr = `OR('A.member', OR('B.member', 'C.member'))`;
        GatePolicy.FromString(policyStr);
    });
    it('andOfAnds', () => {
        const policyStr = `AND('A.member', AND('B.member', 'C.member'), AND('D.member','A.member'))`;
        GatePolicy.FromString(policyStr);
    });
    it('RoleClausePattern', () => {
        const str = `'abc.org.member'`;
        expect(str).toMatch(RoleClausePattern)
    });

});
