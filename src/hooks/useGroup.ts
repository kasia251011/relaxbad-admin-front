// import { useCallback } from 'react';

// import { useGetAllGroupsQuery } from '@/redux/api/groupApi';
// import { GroupType } from '@/redux/types/common';

const useGroup = () => {
  // const { data: singles, isLoading: isLoadingSingles } = useGetRecordsQuery({
  //   recordType: 'singles'
  // });
  // const { data: doubles, isLoading: isLoadingDoubles } = useGetRecordsQuery({
  //   recordType: 'doubles'
  // });
  // const { data: groups, isLoading } = useGetAllGroupsQuery();
  // const getGroupsByType = useCallback(
  //   (type: GroupType) => groups?.filter((group) => group.type === type),
  //   [groups]
  // );
  // const groupedSingles = useMemo(
  //   () =>
  //     groups?.map((group) => ({
  //       ...group,
  //       players: singles?.filter((single) => single.groupId === group._id) as Single[] | undefined
  //     })),
  //   [groups, singles]
  // );
  // const groupedGeneralDoubles = useMemo(
  //   () =>
  //     groups?.map((group) => ({
  //       ...group,
  //       players: doubles?.filter((single) => single.groupId === group._id) as Double[] | undefined
  //     })),
  //   [groups, doubles]
  // );
  // const groupedDoubles = useMemo(
  //   () => groupedGeneralDoubles?.filter((db) => db.type === 'DOUBLE'),
  //   [groupedGeneralDoubles]
  // );
  // const groupedMixes = useMemo(
  //   () => groupedGeneralDoubles?.filter((db) => db.type === 'MIX'),
  //   [groupedGeneralDoubles]
  // );
  // return {
  //   singles: getGroupsByType('SINGLE'),
  //   doubles: getGroupsByType('DOUBLE'),
  //   mixes: getGroupsByType('MIX'),
  //   isLoading
  // };
};

export default useGroup;
