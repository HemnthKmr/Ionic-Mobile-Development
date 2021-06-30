import { calculateBiorhythms } from "./calculations";

it('calculate the physical Biorhythm', () => {
    const {physical} = calculateBiorhythms('1995-01-01','2020-02-18')
    expect(physical).toBeCloseTo(0.5196);
});

it('calculate the emotional Biorhythm', () => {
    const {emotional} = calculateBiorhythms('1995-01-01','2020-02-18')
    expect(emotional).toBeCloseTo(-0.9010);
});

it('calculate the intellectual Biorhythm', () => {
    const {intellectual} = calculateBiorhythms('1995-01-01','2020-02-18')
    expect(intellectual).toBeCloseTo(0.8146);
});