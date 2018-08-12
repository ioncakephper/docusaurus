import createProdConfig from '@lib/webpack/prod';
import {validate} from 'webpack';
import loadSetup from '../loadSetup';

describe('webpack production config', () => {
  test('simple', async () => {
    console.log = jest.fn();
    const props = await loadSetup('simple');
    const config = createProdConfig(props).toConfig();
    const errors = validate(config);
    expect(errors.length).toBe(0);
  });

  test('custom', async () => {
    console.log = jest.fn();
    const props = await loadSetup('custom');
    const config = createProdConfig(props).toConfig();
    const errors = validate(config);
    expect(errors.length).toBe(0);
  });
});
